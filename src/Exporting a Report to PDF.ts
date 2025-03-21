import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-reports-js-angular";

@Component({
    selector: "exporting-report-to-pdf",
    template: `
        <div>
            <button (click)="saveReportPdf()">Export and Save PDF report to file</button>
        </div>`
})

export class ExportingReportToPDF {
    async saveReportPdf() {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("SimpleList.mrt");

        await report.renderAsync2();

        var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
        Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
    }
}