export default class BookstoreService {
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if (Math.random() > 0.75) {
                //     reject(new Error('Something bad Happened!'));
                // }
                resolve(this.data);
            }, 500);
        });
    }

    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 34,
            coverImageUrl: 'https://covers.oreillystatic.com/images/0636920053675/lrg.jpg'
        },
        {
            id: 2,
            title: 'Release it!',
            author: 'Michael T. Nygard',
            price: 32,
            coverImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg'
        }
    ];
}