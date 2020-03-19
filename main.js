function MusicPlayer(audioUrl){
    this.audio = new Audio(audioUrl);
    this.addEvents;     
};
    
    MusicPlayer.prototype.addEvents = function(){
        let that = this
    document.querySelector('.playPlayer').addEventListener('click', function(){    
        that.audio.play();
        
    });
    document.querySelector('.pausePlayer').addEventListener('click',function(){
        that.audio.pause();
    });
    document.querySelector('.stopPlayer').addEventListener('click',function(){
        that.audio.pause();
        that.audio.currentTime = 0.0;
    }); 
    
};  
    
    const mp = new MusicPlayer('https://muz16.z1.fm/f/b1/anastaysha_-_left_outside_alone_(zf.fm).mp3');
    mp.addEvents();
    
    
    
    
    
    
    
    



    
    

