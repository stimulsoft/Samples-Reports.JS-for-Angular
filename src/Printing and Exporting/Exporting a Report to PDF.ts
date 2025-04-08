import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-reports-js-angular";

@Component({
    selector: "exporting-report-to-pdf",
    template: `
        <div class="container">
            <h4>This sample demonstrates how to export a report to a PDF file and save it:</h4>
            <div class="container-button">
                <button (click)="saveReportPdf()" class="button" title="Export Report to PDF File">Export to PDF</button>
            </div>
        </div>
        `,
    styleUrls: ['../styles.css']
})

export class ExportingReportToPDF {
    async saveReportPdf() {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("Reports/SimpleList.mrt");

        await report.renderAsync2();

        var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
        Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
    }
}