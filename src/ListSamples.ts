import { Component } from "@angular/core";
import { RouterLink } from '@angular/router';

@Component({
    imports: [RouterLink],
    template: `
        <nav>
            Localization and Globalization
            <ul>
                <li>
                    <a routerLink="/Localizing_the_Designer">Localizing the Designer</a>
                </li>
                <li>
                    <a routerLink="/Localizing_the_Viewer">Localizing the Viewer</a>
                </li>
                <li>
                    <a routerLink="/Globalizing_Report">Globalizing Report</a>
                </li>
            </ul>
            Fonts and Resources
            <ul>
                <li>
                    <a routerLink="/Using_Custom_Font">Using a Custom Font</a>
                </li>
                <li>
                    <a routerLink="/Adding_a_Font_to_the_Resource">Adding a Font to the Resource</a>
                </li>
            </ul>
            Printing and Exporting
            <ul>
                <li>
                    <a routerLink="/Printing_the_Report_from_Code">Printing the Report from Code</a>
                </li>
                <li>
                    <a routerLink="/Exporting_a_Report_to_PDF">Exporting a Report to PDF</a>
                </li>
                <li>
                    <a routerLink="/Exporting_a_Report_to_HTML">Exporting a Report to HTML</a>
                </li>
                <li>
                    <a routerLink="/Exporting_a_Report_from_Code_with_Changing_Export_Settings">Exporting a Report from Code with Changing Export Settings</a>
                </li>
                <li>
                    <a routerLink="/Exporting_Many_Files_to_Single_PDF">Exporting Many Files to Single PDF</a>
                </li>
            </ul>
            Data Connection and Registration
            <ul>
                <li>
                    <a routerLink="/Creating_a_new_Data_Connection_from_code">Creating a new Data Connection from code</a>
                </li>
                <li>
                    <a routerLink="/Registering_Data_from_Code">Registering Data from Code</a>
                </li>
                <li>
                    <a routerLink="/Using_SQL_Data_Sources">Using SQL Data Sources</a>
                </li>
                <li>
                    <a routerLink="/Using_Parameters_in_SQL_Query">Using Parameters in SQL Query</a>
                </li>
                <li>
                    <a routerLink="/Using_a_Custom_Data_Adapter">Using a Custom Data Adapter</a>
                </li>
                <li>
                    <a routerLink="/Supply_Custom_Headers_for_JSON_Database">Supply Custom Headers for JSON Database</a>
                </li>
            </ul>
            Working with Designer and Viewer Settings and Events
            <ul>
                <li>
                    <a routerLink="/Customizing_the_Designer">Customizing the Designer</a>
                </li>
                <li>
                    <a routerLink="/Changing_the_Designer_Theme">Changing the Designer Theme</a>
                </li>
                <li>
                    <a routerLink="/Customizing_the_Viewer">Customizing the Viewer</a>
                </li>
                <li>
                    <a routerLink="/Changing_the_Viewer_Theme">Changing the Viewer Theme</a>
                </li>
                <li>
                    <a routerLink="/Showing_a_Report_in_the_Viewer_without_Toolbar">Showing a Report in the Viewer without Toolbar</a>
                </li>
                <li>
                    <a routerLink="/Using_Designer_Events">Using Designer Events</a>
                </li>
                <li>
                    <a routerLink="/Using_Viewer_Events">Using Viewer Events</a>
                </li>
                <li>
                    <a routerLink="/Working_with_onDesign_and_onExit_Events">Working with onDesign and onExit Events</a>
                </li>
                <li>
                    <a routerLink="/Using_the_two_Viewer_in_the_One_Project">Using the two Viewer in the One Project</a>
                </li>
                <li>
                    <a routerLink="/Get_a_modified_Report_from_the_Designer">Get a modified Report from the Designer</a>
                </li>
                <li>
                    <a routerLink="/Using_the_Right-To-Left_Mode_in_the_Viewer">Using the Right-To-Left Mode in the Viewer</a>
                </li>
            </ul>
            Working with Reports and Advanced Features
            <ul>
                <li>
                    <a routerLink="/How_to_Activate_the_Product">How to Activate the Product</a>
                </li>
                <li>
                    <a routerLink="/Rendering_a_Report_from_Code">Rendering a Report from Code</a>
                </li>
                <li>
                    <a routerLink="/Using_Report_Variables_in_Code">Using Report Variables in Code</a>
                </li>
                <li>
                    <a routerLink="/Creating_Report_at_Runtime">Creating Report at Runtime</a>
                </li>
            </ul>
        </nav>
    `
})
export class ListSamples { }