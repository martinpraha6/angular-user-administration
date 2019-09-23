import { Pipe, PipeTransform } from "@angular/core";

import * as moment from "moment";
import { TranslateService } from "@ngx-translate/core";

@Pipe({ name: "formatDateTime" })
export class FormatDateTimePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(date: any): any {
    moment.locale(this.translate.currentLang);
    return moment(date).calendar();
  }
}
