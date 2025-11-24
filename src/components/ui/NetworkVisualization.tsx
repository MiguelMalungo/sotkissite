import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import './NetworkVisualization.css';

export const NetworkVisualization: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize chart
    const myChart = echarts.init(chartRef.current);

    // 1. Define Categories
    const categories = [
      { name: 'Root' },
      { name: 'Core Value' },
      { name: 'Modules (Access/DRS/Level)' },
      { name: 'Digital Platform' },
      { name: 'Mobile Apps' },
      { name: 'Integration' },
      { name: 'Ecosystem' }
    ];

    // 2. Define Nodes
    const containerWidth = chartRef.current.offsetWidth || 800;
    const containerHeight = chartRef.current.offsetHeight || 600;
    
    const nodes = [
      // Root
      {
        id: '0',
        name: 'SOTKIS\nSYSTEMS',
        symbolSize: 70,
        category: 0,
        fixed: true,
        x: containerWidth / 2,
        y: containerHeight / 2
      },

      // Branch 1: Core Function
      { id: '1', name: 'Core Function\n& Value', symbolSize: 40, category: 1 },
      { id: '1-1', name: 'Integrated Mgmt', symbolSize: 15, category: 1 },
      { id: '1-2', name: 'Resource Efficiency', symbolSize: 15, category: 1 },
      { id: '1-3', name: 'Profitability', symbolSize: 15, category: 1 },
      { id: '1-4', name: 'Recycling Rates', symbolSize: 15, category: 1 },
      { id: '1-5', name: 'Target Market', symbolSize: 25, category: 1 },
      { id: '1-5-1', name: 'Smart Cities', symbolSize: 10, category: 1 },
      { id: '1-5-2', name: 'Sustainable Communities', symbolSize: 10, category: 1 },

      // Branch 2: Modules
      { id: '2', name: 'MODULES', symbolSize: 50, category: 2 },
      
      // ACCESS
      { id: '2A', name: 'ACCESS\n(PAYT)', symbolSize: 35, category: 2 },
      { id: '2A1', name: 'Goal: Fairer Payment', symbolSize: 15, category: 2 },
      { id: '2A2', name: 'Technology', symbolSize: 20, category: 2 },
      { id: '2A2a', name: 'RFID/NFC', symbolSize: 10, category: 2 },
      { id: '2A2b', name: 'Bluetooth', symbolSize: 10, category: 2 },
      
      // DRS
      { id: '2B', name: 'DRS\n(Return System)', symbolSize: 35, category: 2 },
      { id: '2B1', name: 'Goal: Incentives', symbolSize: 15, category: 2 },
      { id: '2B2', name: 'AI Identification', symbolSize: 20, category: 2 },
      { id: '2B3', name: 'Packaging Types', symbolSize: 15, category: 2 },
      
      // LEVEL
      { id: '2C', name: 'LEVEL\n(Fill Management)', symbolSize: 35, category: 2 },
      { id: '2C1', name: 'Goal: Optimization', symbolSize: 15, category: 2 },
      { id: '2C2', name: 'Ultrasonic/Laser', symbolSize: 15, category: 2 },
      { id: '2C3', name: 'Route Planning', symbolSize: 20, category: 2 },

      // Branch 3: Digital
      { id: '3', name: 'Digital Platform', symbolSize: 45, category: 3 },
      { id: '3A', name: 'Data Portal', symbolSize: 25, category: 3 },
      { id: '3A1', name: 'Billing & Invoices', symbolSize: 15, category: 3 },
      { id: '3A2', name: 'Efficiency Analysis', symbolSize: 15, category: 3 },
      { id: '3B', name: 'Back Office', symbolSize: 25, category: 3 },
      { id: '3C', name: 'Front Office', symbolSize: 25, category: 3 },

      // Branch 4: Apps
      { id: '4', name: 'Mobile Apps', symbolSize: 45, category: 4 },
      { id: '4A', name: 'Sotkis App', symbolSize: 25, category: 4 },
      { id: '4B', name: 'Citizen App', symbolSize: 25, category: 4 },
      { id: '4B1', name: 'Gamification', symbolSize: 15, category: 4 },
      { id: '4B2', name: 'Rewards/Points', symbolSize: 15, category: 4 },

      // Branch 5: Compatibility
      { id: '5', name: 'Integration', symbolSize: 40, category: 5 },
      { id: '5A', name: 'Container Types', symbolSize: 20, category: 5 },
      { id: '5A1', name: 'Underground', symbolSize: 10, category: 5 },
      { id: '5A2', name: 'Surface', symbolSize: 10, category: 5 },
      { id: '5B', name: 'Loading Types', symbolSize: 20, category: 5 },

      // Branch 6: Ecosystem
      { id: '6', name: 'P(L)AYT\nEcosystem', symbolSize: 40, category: 6 },
      { id: '6A', name: 'Incentivize', symbolSize: 15, category: 6 },
      { id: '6B', name: 'Hardware + AI', symbolSize: 15, category: 6 }
    ];

    // 3. Define Links
    const links = [
      { source: '0', target: '1' },
      { source: '1', target: '1-1' },
      { source: '1', target: '1-2' },
      { source: '1', target: '1-3' },
      { source: '1', target: '1-4' },
      { source: '1', target: '1-5' },
      { source: '1-5', target: '1-5-1' },
      { source: '1-5', target: '1-5-2' },
      
      { source: '0', target: '2' },
      { source: '2', target: '2A' },
      { source: '2A', target: '2A1' },
      { source: '2A', target: '2A2' },
      { source: '2A2', target: '2A2a' },
      { source: '2A2', target: '2A2b' },
      { source: '2', target: '2B' },
      { source: '2B', target: '2B1' },
      { source: '2B', target: '2B2' },
      { source: '2B', target: '2B3' },
      { source: '2', target: '2C' },
      { source: '2C', target: '2C1' },
      { source: '2C', target: '2C2' },
      { source: '2C', target: '2C3' },

      { source: '0', target: '3' },
      { source: '3', target: '3A' },
      { source: '3A', target: '3A1' },
      { source: '3A', target: '3A2' },
      { source: '3', target: '3B' },
      { source: '3', target: '3C' },

      { source: '0', target: '4' },
      { source: '4', target: '4A' },
      { source: '4', target: '4B' },
      { source: '4B', target: '4B1' },
      { source: '4B', target: '4B2' },

      { source: '0', target: '5' },
      { source: '5', target: '5A' },
      { source: '5A', target: '5A1' },
      { source: '5A', target: '5A2' },
      { source: '5', target: '5B' },

      { source: '0', target: '6' },
      { source: '6', target: '6A' },
      { source: '6', target: '6B' }
    ];

    // 4. Chart Configuration
    const option = {
      backgroundColor: '#ffffff',
      
      tooltip: {
        trigger: 'item',
        formatter: '{b}',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#ccc',
        textStyle: { color: '#333' }
      },
      
      legend: [{
        data: categories.map(function (a) { return a.name; }),
        textStyle: { color: '#333', fontWeight: 'bold' },
        bottom: 20,
        selectedMode: 'multiple'
      }],
      
      series: [{
        type: 'graph',
        layout: 'force',
        data: nodes,
        links: links,
        categories: categories,
        draggable: true,
        roam: true,
        
        label: {
          show: true,
          position: 'right',
          formatter: '{b}',
          color: '#333',
          fontSize: 11,
          fontWeight: 500
        },
        force: {
          repulsion: 400,
          gravity: 0.1,
          edgeLength: 60,
          layoutAnimation: true
        },
        lineStyle: {
          color: 'source',
          curveness: 0.2,
          width: 1.5,
          opacity: 0.6
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: { width: 4, opacity: 1 }
        }
      }]
    };

    myChart.setOption(option);

    // Handle resize
    const handleResize = () => {
      myChart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, []);

  return (
    <div className="network-visualization">
      <div className="network-visualization__container">
        <h2 className="network-visualization__title">SOTKIS intelligent systems network</h2>
        <div className="network-visualization__hint">
          <span>• <b>Drag</b> nodes to rearrange</span>
          <span>• <b>Scroll</b> to zoom in/out</span>
          <span>• <b>Click</b> blank space to pan</span>
        </div>
        <div ref={chartRef} className="network-visualization__chart" />
      </div>
    </div>
  );
};

