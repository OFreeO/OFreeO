// 화면이 다 불러와진 뒤에 함수 실행
$(
    function(){
        const sounds = document.querySelectorAll('audio')
        const pads = document.querySelectorAll(".pads div")
        const visual = document.getElementById('.visual')
        const title = document.getElementById('.title')
        const color = ['red','aquamarine','green','orange','darkred','gray']

        // js의 forEach
        sounds.forEach(function(index, soundFile){
            soundFile.onended = function(){
            visual.text('')
            title.text('')
            }
        })


        // sounds.each(function(index, soundFile){
        //     soundFile.onended = function(){
        //         visual.text('')
        //         title.text('')
        //     }
        // })

        pads.each(function(index,pad){
            $(pad).on('click',function(){
                sounds.each(function(index, soundFile){
                    soundFile.pause()
                })
                if(sounds[index]){
                    sounds[index].currentTime = 0
                    sounds[index].play()
                    const strArray =
                    sounds[index].src.split("sound/")
                    title.text(strArray[1])
                }

                createBubbles(index)
            });
        })

        const createBubbles = function(index){
            visual.text('')
            const bubble = $('<div></div>')
            visual.append(bubble)//visual에 삽입
            bubble.css('background', color[index]).
            css('top','300px').
            css('animation','animation 2000ms linear infinite both')
        }
        
    }
    
)