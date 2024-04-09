import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {

  @Input() header: String = "متجر النباتات";
  @Input() body: String = "متجر لبيع كافة النباتات ،التوصيل فقط داخل المملكة الاردنية  ";
  @Input() image: String = "assets/images/home page/store.png";
  constructor() { }

  ngOnInit() {}

}
