document.addEventListener('DOMContentLoaded', () =>{
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGmaeOVer = false

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
            let newPlatform = new Platform()
        }
    }

    function start(){
        if (isGmaeOVer == false){
            createDoodler()
            createPlatforms()
        }
    }
    createDoodler()

    //attach to buttin
})