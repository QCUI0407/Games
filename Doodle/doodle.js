document.addEventListener('DOMContentLoaded', () =>{
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 250
    let isGmaeOVer = false
    let platCount = 5
    let platform = []
    let upTimerId
    let downTimerval

    function createDoodler(){
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }

    class Platform{
        constructor(newPlatBottom){
            this.bottom = newPlatBottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom+ 'px'
            grid.appendChild(visual)
        }
    }

    function createPlatforms(){
        for(let i=0; i<platCount; i++){
            let platGap = 600/ platCount
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform(newPlatBottom)
            platform.push(newPlatform)
            console.log(platform);
        }
    }

    function movePlatforms(){
        if (doodlerBottomSpace > 200){
            platform.forEach(plat => {
                plat.bottom -= 4
                let visual = plat.visual
                visual.style.bottom = plat.bottom + 'px'
            })
        }
    }

    function jump(){
        clearInterval(downTimerval)
        upTimerId = setInterval(function(){
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if(doodlerBottomSpace > 350){
                fall()
            }
        }, 30)
    }

    function fall(){
        clearInterval(upTimerId)
        downTimerval =setInterval(function(){
            doodlerBottomSpace -= 5
            doodler.style.bottom = doodlerBottomSpace + 'px'
        })
    }

    function start(){
        if (isGmaeOVer == false){
            createDoodler()
            createPlatforms()
            setInterval(movePlatforms,30)
            jump()
        }
    }

    //attach to button
    start()
})