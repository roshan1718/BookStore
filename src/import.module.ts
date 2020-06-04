import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';

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
                MatBadgeModule
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
                MatBadgeModule
            ]
})

export class ImportModule {}
