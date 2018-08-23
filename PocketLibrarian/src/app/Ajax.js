export default {

    async fetchBookList() {
        try {
            let response = await fetch('http://galaxyinteractivenetwork.com/json/pock-lib/booklist.json');
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },

    async fetchBookDetail01(){
        try {
            let response = await fetch('http://galaxyinteractivenetwork.com/json/pock-lib/booklist.json');
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },

};
