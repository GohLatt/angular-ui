import { Component } from '@angular/core';
import { RecepieModel } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrl: './recepie-list.component.css',
})
export class RecepieListComponent {
  recepieArr: RecepieModel[] = [
    new RecepieModel(
      'Peking duck',
      'Besides the Great Wall of China, Tiananmen Square, Hutong, Peking Opera, no trip to Beijing is complete without a famous Peking duck dinner. Started during the Imperial era and popularized in the mid-19th century, Peking ducks are glazed, slow-cooked and hung for over six hours before being served.',
      'https://i.gocollette.com/img/blog-and-news/blog-posts/2017/4/china-food/peking_duck_dinner.jpg?h=310&w=550&la=en'
    ),
  ];
}
