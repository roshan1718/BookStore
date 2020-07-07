import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTableModule } from '@angular/material/table';

@NgModule  ({
    imports : [ MatToolbarModule,
                MatIconModule,
                MatInputModule,
                MatButtonModule,
                MatCardModule,
                MatSelectModule,
                MatGridListModule,
                MatSidenavModule,
                MatRadioModule,
                FormsModule,
                ReactiveFormsModule,
                MatBadgeModule,
                MatDividerModule,
                MatSnackBarModule,
                Ng2SearchPipeModule,
                MatTableModule

            ],
    exports : [  MatToolbarModule,
                MatIconModule,
                MatInputModule,
                MatButtonModule,
                MatCardModule,
                MatSelectModule,
                MatGridListModule,
                MatSidenavModule,
                MatRadioModule,
                FormsModule,
                ReactiveFormsModule,
                MatBadgeModule,
                MatDividerModule,
                MatSnackBarModule,
                Ng2SearchPipeModule,
                MatTableModule
            ]
})

export class ImportModule {}
