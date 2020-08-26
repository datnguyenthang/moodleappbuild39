// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { AddonSchoolOfSalesProvider } from './providers/schoolofsales';
import { AddonSchoolOfSalesMainMenuHandler } from './providers/mainmenu-handler';
import { CoreMainMenuDelegate } from '@core/mainmenu/providers/delegate';
import { CoreInitDelegate } from '@providers/init';
import { CoreLoginHelperProvider } from '@core/login/providers/helper';
import { CoreUpdateManagerProvider } from '@providers/update-manager';



@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        AddonSchoolOfSalesProvider,
        AddonSchoolOfSalesMainMenuHandler
    ]
})
export class AddonSchoolOfSalesModule {
    constructor(mainMenuDelegate: CoreMainMenuDelegate, schoolofsalesHandler: AddonSchoolOfSalesMainMenuHandler,
            initDelegate: CoreInitDelegate, schoolofsalesProvider: AddonSchoolOfSalesProvider, loginHelper: CoreLoginHelperProvider,
            updateManager: CoreUpdateManagerProvider) {
        mainMenuDelegate.registerHandler(schoolofsalesHandler);
    }
}
