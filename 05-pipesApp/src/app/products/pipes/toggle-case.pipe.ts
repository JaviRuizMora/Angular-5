import { Pipe, PipeTransform } from "@angular/core";


// javier | toggleCse = 'JAVIER'
// JAVIER | toggleCse = 'javier'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {
    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
  }

}
