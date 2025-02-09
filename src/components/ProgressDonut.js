import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './ProgressDonut.css';

function ProgressDonut({ completed, total }) {
  const ref = useRef();
  const size = 150;
  const thickness = 20;

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // Clear any previous drawing

    const radius = size / 2;
    const arc = d3
      .arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius);

    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);

    const data = [
      { name: 'completed', value: completed },
      { name: 'remaining', value: total - completed }
    ];

    const arcs = svg
      .append('g')
      .attr('transform', `translate(${radius}, ${radius})`)
      .selectAll('path')
      .data(pie(data))
      .enter();

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => (d.data.name === 'completed' ? '#4caf50' : '#e0e0e0'));

    // Add percentage text in the center
    svg
      .append('text')
      .attr('x', radius)
      .attr('y', radius)
      .attr('text-anchor', 'middle')
      .attr('dy', '0.3em')
      .style('font-size', '24px')
      .text(total > 0 ? `${Math.round((completed / total) * 100)}%` : '0%');
  }, [completed, total]);

  return <svg ref={ref} width={size} height={size} className="progress-donut" />;
}

export default ProgressDonut;
