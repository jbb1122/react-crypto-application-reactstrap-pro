import React from 'react';

import { Badge, Button } from 'reactstrap';

import { ArrowDownRight } from 'react-feather';

import Chart from 'react-apexcharts';
const SidebarWidget = () => {
  const chart33Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      color: '#3c44b1',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#3c44b1',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      crosshairs: {
        width: 0
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart33Data = [
    {
      name: 'Transactions',
      data: [47, 45, 54, 38, 56, 24, 65]
    }
  ];

  return (
    <>
      <div className="app-sidebar--widget">
        <div className="sidebar-header align-items-center font-weight-bold d-flex justify-content-between text-primary">
          <span>Watch list</span>
          <div>
            <a
              href="#/"
              onClick={(e) => e.preventDefault()}
              className="text-capitalize font-weight-normal text-first"
              title="View details">
              See all
            </a>
          </div>
        </div>
        <div className="app-sidebar-spacer">
          <div className="d-flex justify-content-between mt-2 mb-1">
            <div className="d-flex">
              <div className="font-size-lg text-danger">
                <ArrowDownRight />
              </div>
              <div className="text-left ml-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="font-weight-bold">2.4895 BTC</div>
                  <Badge color="neutral-danger" className="ml-2 text-danger">
                    -8%
                  </Badge>
                </div>
                <div className="text-black opacity-4 font-size-sm">$16,497</div>
              </div>
            </div>
          </div>
          <div className="d-flex mt-3 justify-content-between">
            <Button className="px-4 py-2 text-uppercase" color="danger" outline>
              <small className="font-weight-bold px-1">Deposit</small>
            </Button>
            <Button className="px-4 py-2 text-uppercase" color="success">
              <small className="font-weight-bold px-1">Withdraw</small>
            </Button>
          </div>
        </div>
        <div>
          <Chart
            options={chart33Options}
            series={chart33Data}
            type="area"
            height={80}
          />
        </div>
      </div>
    </>
  );
};

export default SidebarWidget;
