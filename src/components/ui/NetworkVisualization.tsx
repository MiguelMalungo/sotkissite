import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import './NetworkVisualization.css';

export const NetworkVisualization: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize chart
    const myChart = echarts.init(chartRef.current);

    // 1. Define Categories (Branches)
    const categories = [
      { name: 'Raiz', itemStyle: { color: '#2c3e50' } },
      { name: 'Software', itemStyle: { color: '#3498db' } }, // Blue
      { name: 'Hardware', itemStyle: { color: '#e74c3c' } }, // Red
      { name: 'Benefícios Municipais', itemStyle: { color: '#2ecc71' } }, // Green
      { name: 'Benefícios Cidadão', itemStyle: { color: '#f39c12' } }  // Orange
    ];

    // 2. Define Nodes
    const containerWidth = chartRef.current.offsetWidth || 800;
    const containerHeight = chartRef.current.offsetHeight || 600;

    // Nodes based on Paylt.tsx features
    const nodes = [
      // Root
      {
        id: '0',
        name: 'Ecossistema\nP(L)AYT',
        symbolSize: 80,
        category: 0,
        fixed: true,
        x: containerWidth / 2,
        y: containerHeight / 2,
        description: 'O ecossistema completo SOTKIS Pay-As-You-Throw que conecta tecnologia, gestão de resíduos e cidadãos.'
      },

      // Branch 1: Software
      { id: '1', name: 'Software\nInteligente', symbolSize: 50, category: 1, description: 'Infraestrutura dinâmica e escalável.' },
      { id: '1-1', name: 'Dashboards', symbolSize: 20, category: 1, description: 'Dashboards interativos para análise e tomada de decisão em tempo real.' },
      { id: '1-2', name: 'App Móvel', symbolSize: 20, category: 1, description: 'Aplicação móvel com acesso por Bluetooth e NFC para maior conveniência.' },
      { id: '1-3', name: 'Marketplace', symbolSize: 20, category: 1, description: 'Marketplace integrado com benefícios, recompensas e funcionalidades digitais.' },
      { id: '1-4', name: 'Gamificação', symbolSize: 20, category: 1, description: 'Ferramentas de gamificação para incentivar comportamentos sustentáveis.' },

      // Branch 2: Hardware
      { id: '2', name: 'Hardware\nAvançado', symbolSize: 50, category: 2, description: 'Dispositivos inteligentes para qualquer contentor.' },
      { id: '2-1', name: 'Sensores IoT', symbolSize: 20, category: 2, description: 'Sensores IoT para deteção de diferentes materiais em qualquer tipo de contentor.' },
      { id: '2-2', name: 'RFID', symbolSize: 20, category: 2, description: 'RFID para recolha porta-a-porta com identificação precisa.' },
      { id: '2-3', name: 'Câmaras IA', symbolSize: 20, category: 2, description: 'Câmaras com IA para deteção e prevenção de contaminação.' },
      { id: '2-4', name: 'Acessos', symbolSize: 20, category: 2, description: 'Sistemas de controlo de acessos para utilizadores individuais.' },

      // Branch 3: Municipal Benefits
      { id: '3', name: 'Para\nMunicípios', symbolSize: 50, category: 3, description: 'Benefícios para a gestão municipal.' },
      { id: '3-1', name: 'Eficiência', symbolSize: 20, category: 3, description: 'Aumento da eficiência operacional através de processos automatizados e otimizados.' },
      { id: '3-2', name: 'Redução Custos', symbolSize: 20, category: 3, description: 'Redução de custos de recolha e tratamento de resíduos.' },
      { id: '3-3', name: 'Modelos PAYT', symbolSize: 20, category: 3, description: 'Implementação transparente de modelos PAYT/RAYT/SAYT.' },
      { id: '3-4', name: 'Contaminação', symbolSize: 20, category: 3, description: 'Maior controlo sobre contaminação e qualidade dos resíduos.' },
      { id: '3-5', name: 'Dados Fiáveis', symbolSize: 20, category: 3, description: 'Dados fiáveis para planeamento e tomada de decisão estratégica.' },

      // Branch 4: Citizen Benefits
      { id: '4', name: 'Para\nCidadãos', symbolSize: 50, category: 4, description: 'Benefícios para a comunidade.' },
      { id: '4-1', name: 'Participação', symbolSize: 20, category: 4, description: 'Participação ativa e fácil no processo de reciclagem.' },
      { id: '4-2', name: 'Recompensas', symbolSize: 20, category: 4, description: 'Sistema de recompensas e gamificação que motiva a mudança de comportamento.' },
      { id: '4-3', name: 'Feedback', symbolSize: 20, category: 4, description: 'Feedback imediato sobre hábitos individuais de reciclagem.' },
      { id: '4-4', name: 'Acesso App', symbolSize: 20, category: 4, description: 'Acesso em tempo real via app com Bluetooth e NFC.' },
      { id: '4-5', name: 'Sustentabilidade', symbolSize: 20, category: 4, description: 'Contribuição direta para um ambiente mais sustentável.' }
    ];

    // 3. Define Links
    const links = [
      // Software Branch
      { source: '0', target: '1' },
      { source: '1', target: '1-1' },
      { source: '1', target: '1-2' },
      { source: '1', target: '1-3' },
      { source: '1', target: '1-4' },

      // Hardware Branch
      { source: '0', target: '2' },
      { source: '2', target: '2-1' },
      { source: '2', target: '2-2' },
      { source: '2', target: '2-3' },
      { source: '2', target: '2-4' },

      // Municipal Branch
      { source: '0', target: '3' },
      { source: '3', target: '3-1' },
      { source: '3', target: '3-2' },
      { source: '3', target: '3-3' },
      { source: '3', target: '3-4' },
      { source: '3', target: '3-5' },

      // Citizen Branch
      { source: '0', target: '4' },
      { source: '4', target: '4-1' },
      { source: '4', target: '4-2' },
      { source: '4', target: '4-3' },
      { source: '4', target: '4-4' },
      { source: '4', target: '4-5' }
    ];

    // 4. Chart Configuration
    const option = {
      backgroundColor: 'transparent', // Ensure transparency for full integration

      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          if (params.dataType === 'node') {
            return `<div style="max-width: 250px; white-space: normal; font-family: sans-serif;">
              <strong style="color: ${params.color}">${params.name.replace(/\n/g, ' ')}</strong><br/>
              <span style="font-size: 13px; color: #555; display: block; margin-top: 6px; line-height: 1.4;">${params.data.description || ''}</span>
            </div>`;
          }
          return params.name; // For links
        },
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        borderColor: '#eee',
        borderWidth: 1,
        textStyle: { color: '#333' },
        extraCssText: 'box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 8px; padding: 12px;'
      },

      legend: [{
        data: categories.map(function (a) { return a.name; }),
        textStyle: { color: '#333', fontWeight: 'bold' },
        bottom: 0,
        selectedMode: 'multiple'
      }],

      series: [{
        type: 'graph',
        layout: 'force',
        data: nodes,
        links: links,
        categories: categories,
        draggable: true,
        roam: false,

        label: {
          show: true,
          position: 'right',
          formatter: '{b}',
          color: '#333',
          fontSize: 12,
          fontWeight: 600
        },
        force: {
          repulsion: 450,
          gravity: 0.08,
          edgeLength: [60, 140],
          layoutAnimation: true
        },
        lineStyle: {
          color: 'source',
          curveness: 0.15,
          width: 2,
          opacity: 0.6
        },
        emphasis: {
          focus: 'adjacency',
          scale: true,
          label: { show: true },
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
        <div className="network-visualization__hint">
          <span>• <b>Arraste</b> para reorganizar</span>
          <span>• <b>Passe o rato</b> para ver detalhes</span>
        </div>
        <div ref={chartRef} className="network-visualization__chart" />
      </div>
    </div>
  );
};
