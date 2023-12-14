AFRAME.registerComponent('mycomponent', {
    init: function() {
        console.log('meu componente')
    },

    events: {
        click: function(e) {
            this.criarOutroElento();
        }
    },

    criarOutroElento: function() {
        const newbox = document.createElement('a-box');
        newbox.setAttribute('color', 'blue');
        newbox.setAttribute('position', '-2 1 -5')
        this.el.sceneEl.appendChild(newbox);

    }

});