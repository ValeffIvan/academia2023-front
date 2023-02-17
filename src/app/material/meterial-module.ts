import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort'
import { NgModule } from '@angular/core';


@NgModule({
    declarations:[],
    imports:[],
    exports:[        
        MatTabsModule,
        MatIconModule,
        MatTableModule,
        MatSelectModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDividerModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatMenuModule,
        MatSortModule
    ],
})
export class MaterialModule { }