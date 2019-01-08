import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Post N°1',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sunt nostrum suscipit fuga quae officiis repellat ullam expedita, doloribus voluptates, voluptatum ea consectetur ducimus neque vero!',
      loveIts: 5,
      created_at: new Date('January 08, 2019 07:24:00')
    },
    {
      title: 'Post N°2',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sunt nostrum suscipit fuga quae officiis repellat ullam expedita, doloribus voluptates, voluptatum ea consectetur ducimus neque vero!',
      loveIts: -3,
      created_at: new Date('January 08, 2019 09:03:46')
    },
    {
      title: 'Post N°3',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sunt nostrum suscipit fuga quae officiis repellat ullam expedita, doloribus voluptates, voluptatum ea consectetur ducimus neque vero!',
      loveIts: 0,
      created_at: new Date('January 08, 2019 09:59:59')
    }
  ];
}
