
window.addEventListener('load',function()
{

        const sounds = document.querySelectorAll('audio')

        const pads = document.querySelectorAll(".pads div")

        const visual = document.querySelector('.visual')

        const title = document.querySelector('.title')

        const color = ['red','aquamarine','green','orange','darkred','gray']

        // js의 forEach

        sounds.forEach(
            function(soundFile){
                soundFile.onended = function(){
                    visual.innerHTML = ''
                    title.innerHTML = ''
                }
            }
        )

        // sounds.each(function(index, soundFile){
        //     soundFile.onended = function(){
        //         visual.text('')
        //         title.text('')
        //     }
        // })

        pads.forEach(
            function(pad, index){
                pad.addEventListener('click',function(){
                    sounds.forEach(function(inx){
                        inx.pause()
                    })
                    if(sounds[index]){
                        sounds[index].currentTime = 0
                        sounds[index].play()
                        const strArray = sounds[index].src.split('sound/')
                        title.innerHTML = strArray[1]
                    }
                    createBubbles(index)
                })

            })


        // pads.each(function(index,pad){
        //     $(pad).on('click',function(){
        //         sounds.each(function(index, soundFile){
        //             soundFile.pause()
        //         })
        //         if(sounds[index]){
        //             sounds[index].currentTime = 0
        //             sounds[index].play()
        //             const strArray =
        //             sounds[index].src.split("sound/")
        //             title.text(strArray[1])
        //         }

        //         createBubbles(index)
        //     });
        // })

        const createBubbles = function(index)
        {
            visual.innerHTML = ''
            const bubble = document.createElement('div')
            visual.appendChild(bubble)
            bubble.style.backgroundColor  = color[index]
            bubble.style.top = '300px'
            bubble.style.animation = 'animation 2000ms linear infinite both'
        }

        // const createBubbles = function(index){
        //     visual.text('')
        //     const bubble = $('<div></div>')
        //     visual.append(bubble)
        //     bubble.css('background', color[index]).
        //     css('top','300px').
        //     css('animation','animation 2000ms linear infinite both')
        // }

})