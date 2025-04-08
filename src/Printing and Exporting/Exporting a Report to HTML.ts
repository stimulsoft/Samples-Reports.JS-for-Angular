import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-reports-js-angular";

@Component({
    selector: "exporting-report-to-html",
    template: `
        <div class="container">
            <h4>This sample demonstrates how to export a report to an HTML file and save it:</h4>
            <div class="container-button">
                <button (click)="saveReportHtml()" class="button" title="Export Report to HTML File">Export to HTML</button>
            </div>
        </div>
        `,
    styleUrls: ['../styles.css']

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