import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "codigo",
})
export class CodigoPipe implements PipeTransform {
  transform(id: number): any {
    console.log('entrei no pipe')
    return id.toString().padStart(6, '0');
  }
}
