import { Component, OnInit } from '@angular/core';
import { CoronaWhatisService } from 'src/app/services/corona-whatis.service';

@Component({
  selector: 'app-measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.css']
})
export class MeasuresComponent implements OnInit {

  // Array containers
  measuresA: Array<String> = [];
  measuresB: Array<String> = [];

  constructor(private coronaService: CoronaWhatisService) { }

  ngOnInit(): void {
    this.coronaService.getMeasures().subscribe((data: []) => {
      console.log('Fetching Preventative Measures..');

      // Split array into two equal parts
      const splitArrays = this.splitToChunks(data, 2);
      
      console.log('Preventative Measures: ', splitArrays);
      // Assign to respective arrays
      this.measuresA = splitArrays[0];
      this.measuresB = splitArrays[1];
    });
  }

  /**
   * @name splitToChunks
   * @param {Array<String>} array array containing strings
   * @param {Number} parts number of parts to divide the array into
   * @returns {Array} returns array containing the split arrays according to the parts specified
   */
  splitToChunks = (array: Array<String>, parts: number): Array<any> => {
    let result: Array<any> = new Array;
    for (let i = parts; i > 0; i--) {
      result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
  }

}
