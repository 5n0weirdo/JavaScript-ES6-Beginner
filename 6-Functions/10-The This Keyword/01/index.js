//method : obj
//function -> global

const video = {
    title: "a",
    tags: ["a", "b", "c"],
    play() {
        console.log(this);
    },
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();