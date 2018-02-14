// Copyright 2017 The Kubernetes Authors.
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

import {Component, OnInit} from '@angular/core';
import {StateService, TransitionService} from '@uirouter/core';
import {searchState} from '../../search/state';

@Component({selector: 'kd-search', templateUrl: './template.html', styleUrls: ['./style.scss']})
export class SearchComponent implements OnInit {
  private query_ = '';

  constructor(
      private readonly state_: StateService, private readonly transition_: TransitionService) {}

  ngOnInit(): void {
    this.transition_.onStart({}, () => {
      this.query_ = '';
    });
  }

  submit(): void {
    this.state_.go(searchState.name, {SEARCH_QUERY_STATE_PARAM: this.query_});  // TODO fix
  }
}
