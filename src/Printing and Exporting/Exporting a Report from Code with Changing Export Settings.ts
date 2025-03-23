import { Component } from "@angular/core";
import { Stimulsoft } from "stimulsoft-reports-js-angular";

@Component({
    selector: "exporting-report-from-code-with-changing-export-settings",
    template: `
        <div>
            <button (click)="saveReportPdf()">Export and Save PDF report to file</button>
        </div>`
})

export class ExportingReportFromCodeWithChangingExportSettings {
    async saveReportPdf() {
        var report = new Stimulsoft.Report.StiReport();
        report.loadFile("Reports/SimpleList.mrt");

        await report.renderAsync2();

        var settings = new Stimulsoft.Report.Export.StiPdfExportSettings();
        settings.creatorString = 'My Company Name';
        settings.keywordsString = 'SimpleList Report Export';
        settings.embeddedFonts = false;
        settings.passwordInputUser = "123";

        var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf, undefined, settings);
        Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
    }
}