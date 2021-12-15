// 화면이 다 불러와진 뒤에 함수 실행
$(
    function(){
        const sounds = $('audio')
        const pads = $(".pads div")
        const visual = $('.visual')
        const title = $('.title')
        const color = ['red','aquamarine','green','orange','darkred','gray']

        // js의 forEach

        sounds.each(function(index, soundFile){
            soundFile.onended = function(){
                visual.text('')
                title.text('')
            }
        })

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
            visual.append(bubble)
            bubble.css('background', color[index]).
            css('top','300px').
            css('animation','animation 2000ms linear infinite both')
        }
        
    }
    
)