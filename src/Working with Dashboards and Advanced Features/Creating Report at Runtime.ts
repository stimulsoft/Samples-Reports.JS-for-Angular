import { Component } from "@angular/core";
import { Viewer, Stimulsoft } from "stimulsoft-reports-js-angular/viewer";

@Component({
    selector: "creating-report-at-runtime",
    imports: [Viewer],
    template: `<sti-viewer [report]="report"></sti-viewer>`
})

export class CreatingReportAtRuntime {
    report: Stimulsoft.Report.StiReport;

    constructor() {
        this.report = new Stimulsoft.Report.StiReport();

        // Add data to datastore
        var dataSet = new Stimulsoft.System.Data.DataSet();
        dataSet.readJsonFile("Data/Demo.json");
        this.report.regData("Demo", "Demo", dataSet);

        // Fill dictionary
        this.report.dictionary.synchronize();

        var page = this.report.pages.getByIndex(0);

        // Create HeaderBand
        var headerBand = new Stimulsoft.Report.Components.StiHeaderBand();
        headerBand.height = 0.5;
        headerBand.name = "HeaderBand";
        page.components.add(headerBand);

        // Create text on header
        var headerText = new Stimulsoft.Report.Components.StiText(new Stimulsoft.System.Drawing.Rectangle(0, 0, 5, 0.5));
        headerText.text = "CompanyName";
        headerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
        headerText.name = "HeaderText";
        headerText.brush = new Stimulsoft.Base.Drawing.StiSolidBrush(Stimulsoft.System.Drawing.Color.lightGreen);
        headerBand.components.add(headerText);

        // Create Databand
        var dataBand = new Stimulsoft.Report.Components.StiDataBand();
        dataBand.dataSourceName = "Customers";
        dataBand.height = 0.5;
        dataBand.name = "DataBand";
        page.components.add(dataBand);

        // Create text
        var dataText = new Stimulsoft.Report.Components.StiText(new Stimulsoft.System.Drawing.Rectangle(0, 0, 5, 0.5));
        dataText.text = "{Line}.{Customers.CompanyName}";
        dataText.name = "DataText";
        dataBand.components.add(dataText);

        // Create FooterBand
        var footerBand = new Stimulsoft.Report.Components.StiFooterBand();
        footerBand.height = 0.5;
        footerBand.name = "FooterBand";
        page.components.add(footerBand);

        // Create text on footer
        var footerText = new Stimulsoft.Report.Components.StiText(new Stimulsoft.System.Drawing.Rectangle(0, 0, 5, 0.5));
        footerText.text = "Count: {Count()}";
        footerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
        footerText.name = "FooterText";
        footerText.brush = new Stimulsoft.Base.Drawing.StiSolidBrush(Stimulsoft.System.Drawing.Color.lightGreen);
        footerBand.components.add(footerText);
    }
}