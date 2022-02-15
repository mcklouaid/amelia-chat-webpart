import '../styles/global.css';

import * as strings from 'AmeliaChaCustomizerApplicationCustomizerStrings';

import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';

const LOG_SOURCE: string = 'AmeliaChaCustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAmeliaChaCustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  cssurl: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class AmeliaChaCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IAmeliaChaCustomizerApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    const cssUrl: string = this.properties.cssurl;


    if (cssUrl) {
      const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
      let customStyle: HTMLLinkElement = document.createElement("link");
      customStyle.href = cssUrl;
      customStyle.rel = "styleSheet";
      customStyle.type = "text/css";
      head.insertAdjacentElement("beforeEnd", customStyle);
    }

    if (!cssUrl) {
      console.log(this.properties);
    }

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    //Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

    return Promise.resolve();
  }
}
