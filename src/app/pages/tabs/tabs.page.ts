import { Component, OnInit } from '@angular/core';
import {Assets} from '../../constants/constants' ;;
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  
  public assets = Assets
  constructor(
    
  ) { 
    
  }

  ngOnInit() {
    
  }

}
