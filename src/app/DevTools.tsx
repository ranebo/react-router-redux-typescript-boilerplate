import * as React from 'react';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import { createDevTools } from 'redux-devtools';

export default createDevTools(
  <DockMonitor
    defaultIsVisible={false}
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-p"
    changeMonitorKey="ctrl-m"
  >
    <LogMonitor />
  </DockMonitor>
);
