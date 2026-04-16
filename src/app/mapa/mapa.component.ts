import { Component } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';

@Component({
  selector: 'app-mapa',
  standalone: false,
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {
options = {
	layers: [
		tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
	],
	zoom: 35,
	center: latLng(19.689255459883096 , -99.05410766601564)
};

capas: Marker<any>[]=[];

manejarClick(event:LeafletMouseEvent){
  const latitud = event.latlng.lat;
  const longitud =event.latlng.lng;
  console.log(latitud,longitud);
  this.capas=[];
  this.capas.push(marker([latitud, longitud]));
}

agregarTexto(){
  console.log("cuentas");
  console.log("hola")
}
}

