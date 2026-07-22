import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { toSignal} from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.services';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-gifs-historial',
  imports: [GifListComponent],
  templateUrl: './gifs-historial.component.html',
  styleUrl: './gifs-historial.component.css'
})
export default class GifsHistorialComponent {
  gifService = inject(GifService)
  //query = inject(ActivatedRoute).params.subscribe((params)=>{
    //console.log(params['query']);
  //})

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map(params=>params['query']))
  );

  gifsByKey = computed(()=> this.gifService.getHistoryGifs(this.query()))
}
