import * as React from "react";

import { IAmeliaWebpartProps } from "./IAmeliaWebpartProps";
import styles from "./AmeliaWebpart.module.scss";

export default class AmeliaWebpart extends React.Component<
  IAmeliaWebpartProps,
  {}
> {
  public render(): React.ReactElement<IAmeliaWebpartProps> {
    return (
      <div className={styles.ameliaWebpart}>
        <div className={styles.container}>
          <div className={styles.ameliaAvatarSection}>
            <div className={styles.imgAvatarSpot}>
              <img
                src={require("../../assets/amelia-img-small-76X76.png")}
                alt="Amelia Avatar"
              />
            </div>
            <div className={styles.insideText}>
              <b>Got an HR question?</b> Hi! I'm your virtual HR agent. I can
              answer your questions right away.
            </div>
          </div>
          <div className={styles.ameliaChatSection}>
            <div className={styles.imgChatSpot}>
              <img src={require("../../assets/amelia-chat.png")} alt="Chat Icon"/>
              <b>Need help now?</b>
            </div>
            <div className={styles.startConvoText}>
              <a href="">Start a Conversation</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
