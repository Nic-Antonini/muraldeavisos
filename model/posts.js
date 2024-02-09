module.exports = {

    posts: [{
        id: 'loremipsum',
        title: 'Título do aviso',
        description: 'Descrição do aviso'
    }],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateId(), title, description})
    }
                
}

function generateId(){
    return Math.random().toString(36).slice(2, 11);
};