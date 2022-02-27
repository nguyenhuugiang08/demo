const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'F8-PLAYER'

const playList = $('.playlist')
const cd = $('.cd')
const cdWidth = cd.offsetWidth

const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')



const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: "Chạy Về Khóc Với Anh",
            singer: "ERIK",
            path: "./assests/img/song1.mp3",
            image: "https://data.chiasenhac.com/data/cover/155/154074.jpg"
          },
          {
            name: "Bước Qua Nhau",
            singer: "Vũ",
            path: "./assests/img/song2.mp3",
            image:
              "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
          },
          {
            name: "Thương Em đến Khi Già",
            singer: "Lê Bảo Bình",
            path:
              "./assests/img/song3.mp3",
            image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
          },
          {
            name: "Mantoiyat",
            singer: "Raftaar x Nawazuddin Siddiqui",
            path: "https://mp3.vlcmusic.com/download.php?track_id=14448&format=320",
            image:
              "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
          },
          {
            name: "Aage Chal",
            singer: "Raftaar",
            path: "https://mp3.vlcmusic.com/download.php?track_id=25791&format=320",
            image:
              "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
          },
          {
            name: "Damn",
            singer: "Raftaar x kr$na",
            path:
              "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
            image:
              "https://avatar-ex-swe.nixcdn.com/song/2018/06/19/7/b/9/3/1529382807600_500.jpg"
          },
          {
            name: "Feeling You",
            singer: "Raftaar x Harjas",
            path: "https://mp3.vlcmusic.com/download.php?track_id=27145&format=320",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
          }
    ],
    setConfig: function(key, value) {
        this.config[key] =value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function() {
        var htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active': '' }  " data-index = "${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                        </div>
                    <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        playList.innerHTML = htmls.join('')

    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
        }})
    },
    handleEvents : function() {
        document.onscroll = function() {
            const scrollTop = document.documentElement.scrollTop || window.screenY
            const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0
            cd.style.opacity = newCdWidth / cdWidth

        }

        // 
        const cdThumbAnimate = cdThumb.animate([
                {transform: 'rotate(360deg)'}
            ], {
                duration: 10000,
                iterations: Infinity
            })

        cdThumbAnimate.pause();

        // xử lý khi click play
        playBtn.onclick = function() {
            if(app.isPlaying) {
                audio.pause()
            }else {
                audio.play()
            }
          
        }

        // xử lý khi bài hát play
        audio.onplay = function() {
            app.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play();
        }
          // xử lý khi bài hát pause
        audio.onpause = function() {
            app.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause();
        }

        // khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
           if(audio.duration) {
               const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
               progress.value = progressPercent
           }
        }

        // xử lý khi tua bài hát
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        // xử lý next bài hát
        nextBtn.onclick = function() {
            if(app.isRandom) {
                app.playRandomSong()
            }else {
                app.nextSong()
            }
            app.render()
            app.scrollToActiveSong()

            audio.play()
        }
         // xử lý prev bài hát
         prevBtn.onclick = function() {
            if(app.isRandom) {
                app.playRandomSong()
            }else {
                app.prevSong()
            }
            app.render()
            app.scrollToActiveSong()
            audio.play()
        }

        // xử lỹ khi click random
        randomBtn.onclick = function() {
            app.isRandom = !app.isRandom
            app.setConfig('isRandom', app.isRandom)
            randomBtn.classList.toggle('active', app.isRandom)
        }
        // xử lý khi bài hát kết thúc
        audio.onended =function() {
            if(app.isRepeat){
                audio.play()
            }else {
                nextBtn.click();
            }
            
        }
        // xủ lý khi click vào playlist
        playList.onclick = function (e) {

            const songNode = e.target.closest('.song:not(.active)')
            const optionNode =e.target.closest('.option')
            if( songNode || optionNode) {
                if(songNode){
                    app.currentIndex = Number(songNode.dataset.index)
                    app.loadCurrentSong(app.currentIndex)
                    app.render()
                    audio.play()
                }

                if(optionNode) {
                    
                }
            }
        }
        // xử lý lặp lại 1 bài hát
        repeatBtn.onclick = function() {
            app.isRepeat = !app.isRepeat
            app.setConfig('isRepeat', app.isRepeat)
            repeatBtn.classList.toggle('active', app.isRepeat)
        }
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1 
        }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior : 'smooth',
                block: 'nearest'
            })
        }, 300)
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    start : function() {
        // gán cấu hình từ config từ ứng dụng
        this.loadConfig()
        // định nghĩa các thuộc tính cho object
        this.defineProperties()

        // lắng nghe và xử lý các evets
        this.handleEvents()

        // tải thông tin bài hát hiện tại
        this.loadCurrentSong()

        // render playist
        this.render()
        // trạng thái ban đầu của các button
        randomBtn.classList.toggle('active', app.isRandom)
        repeatBtn.classList.toggle('active', app.isRepeat)
    }
}

app.start();