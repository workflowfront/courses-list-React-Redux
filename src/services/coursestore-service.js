
export default class CoursestoreService {

  data = [
    {
      id: 1,
      title: 'React + Redux - Профессиональная Разработка',
      author: 'Juriy Bura',
      price: 9450,
      coverImage: 'https://im0-tub-ru.yandex.net/i?id=4e509a5ff5c4130ccb42506f41d14983&n=13'},
    {
      id: 2,
      title: '2021 Update! React Testing with Jest and Enzyme',
      author: 'Bonnie Schulkin',
      price: 4550,
      coverImage: 'https://cdn-images-1.medium.com/max/1024/1*m-wrUVi1Pz-FFx6YN1eHhA.png'}
  ];

  getCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}