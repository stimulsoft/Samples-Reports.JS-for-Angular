import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-reports-js-angular";

@Component({
    selector: "exporting-report-to-html",
    template: `
        <div>
            <button (click)="saveReportHtml()">Export and Save HTML report to file</button>
        </div>`
})

export class ExportingReportToHTML {
    async saveReportHtml() {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("Reports/SimpleList.mrt");

        await report.renderAsync2();

        var htmlData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Html);
        Stimulsoft.System.StiObject.saveAs(htmlData, report.reportAlias + ".html", "text/html;charset=utf-8");
    }
}