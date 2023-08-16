import React from 'react';
const PortsImportedHosted = () => (
<table>
    <thead>
        <tr>
        <th>From / To</th>
        <th>Rancher Nodes</th>
        <th>Hosted / Imported Cluster</th>
        <th>External Rancher Load Balancer</th>
        <th>Internet</th>
    </tr>
    </thead>
    <tbody>
        <tr>
        <td rowspan="3">Rancher Nodes <sup>(1)</sup></td>
        <td rowspan="3" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>80 TCP</td>
        <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>Kubernetes API <br/>Endpoint Port <sup>(2)</sup></td>
        <td></td>
        <td rowspan="3" style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>git.rancher.io</td>
        </tr>
        <tr>
        <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>8443 TCP</td>
        <td></td>
        </tr>
        <tr>
        <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>9443 TCP</td>
        <td></td>
        </tr>
        <tr>
        <td>Hosted / Imported Cluster</td>
        <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>443 TCP <sup>(4)(5)</sup></td>
        <td></td>
        <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>443 TCP <sup>(5)</sup></td>
        <td></td>
        </tr>
        <tr>
        <td>Kubernetes API Clients</td>
        <td></td>
        <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>Cluster / Provider Specific <sup>(6)</sup></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>Workload Client</td>
        <td></td>
        <td style={{
            "background-color": "#3497DA",
            color: "#ffffff"
          }}>Cluster / Provider Specific <sup>(7)</sup></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td colspan="5">Notes:<br/><br/>1. Nodes running standalone server or Rancher HA deployment.<br/>2. Only for hosted clusters.<br/>3. Required to fetch Rancher chart library.<br/>4. Only without external load balancer.<br/>5. From worker nodes.<br/>6. For direct access to the Kubernetes API without Rancher.<br/>7. Usually Ingress backed by infrastructure load balancer and/or nodeport.</td>
        </tr>
    </tbody>
  </table>
)
export default PortsImportedHosted;