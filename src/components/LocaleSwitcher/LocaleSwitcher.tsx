import { IconButton, Menu, MenuItem } from "@material-ui/core";
import Language from "@material-ui/icons/Language";
import { navigate } from "gatsby";
import React from "react";

import { Locale, LOCALES } from "@src/config/locales";
import { WithLocale, withLocale } from "@src/contexts/LocaleContext";
import { changeLocaleInPath } from "@src/utils/locale";

export type LocaleSwitcherProps = WithLocale & {};

type LocaleSwitcherState = {
  anchorEl?: HTMLElement;
};

class LocaleSwitcher extends React.Component<WithLocale, LocaleSwitcherState> {
  public state: LocaleSwitcherState = {};
  public render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-owns={open ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit">
          <Language />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={this.handleClose}>
          {LOCALES.map(this.renderLocaleMenuItem)}
        </Menu>
      </div>
    );
  }

  private renderLocaleMenuItem = (l: Locale) => {
    const { locale } = this.props;
    const handleClick = () => {
      const path = changeLocaleInPath(window.location.pathname, l.code);
      navigate(path);
      this.handleClose();
    };
    return (
      <MenuItem key={l.code} selected={locale === l.code} onClick={handleClick}>
        {l.localTitle} ({l.englishTitle})
      </MenuItem>
    );
  };

  private handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  private handleClose = () => {
    this.setState({ anchorEl: undefined });
  };
}

export default withLocale(LocaleSwitcher);
