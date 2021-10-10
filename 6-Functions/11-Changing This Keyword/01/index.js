
const video = {
    title: "a",
    tags: ["a", "b", "c"],
    play() {
        console.log(this);
    },
    showTags() {

        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    }
};

video.showTags();



// function playVideo(a, b) {
//     console.log(this);
// }

// playVideo.apply({name: "Web"}, [1, 2]);
// playVideo.call({name: "Dev"}, 1, 2);
// playVideo.bind({name: "Design"})();

// playVideo();