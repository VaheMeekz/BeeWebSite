import React from 'react';
import php from '../../assets/images/PHP.png'
import javascript from '../../assets/images/JavaScript.png'
import angular from '../../assets/images/Angular.png'
import pyton from '../../assets/images/Python.png'
import vue from '../../assets/images/Vue.png'

const Tecnologies = () => {
    return (
        <section class="section">
		<div class="container">
			<div class="row1">
				<p class="text_row1">Tecnologise</p>
			</div>
			<div class="row2">
				<p class="text_row2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna proin tortor eu ut tortor turpis accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna proin tortor eu ut tortor turpis accumsan.  </p>
			</div>
		<div class="container_row3_row4">
			<div class="row3">
				<span class="row3_span"></span>

				<div class="row3_div1">
					<div class="row3_div_img">
						<img src={php} alt={"img"} />
					</div>
					<p class="row3_p">PHP</p>
				</div>
				<div class="row3_div2">
					<div class="row3_div_img">
						<img src={javascript} alt={"img"} />
					</div>
					<p class="row3_p">JavaScript</p>
				</div>
				<div class="row3_div3">
					<div class="row3_div_img">
						<img src={angular}  alt={"img"}  />
					</div>
					<p class="row3_p">Angular</p>
				</div>
				<div class="row3_div4">
					<div class="row3_div_img">
						<img src={vue} alt={"img"} />
					</div>
					<p class="row3_p">Vue.js</p>
				</div>
				<div class="row3_div5">
					<div class="row3_div_img">
						<img src={pyton}  alt={"img"} />
					</div>
					<p class="row3_p">Python</p>
				</div>
				<div class="row3_div6">
					<div class="row3_div_img">
						<img src={angular}  alt={"img"} />
					</div>
					<p class="row3_p">Angular</p>
				</div>
			</div>
			<div class="div_line_row3_row4">
				<div class="line_row3_row4"></div>
				<div class="line_row3_row4"></div>
				<div class="line_row3_row4"></div>
				<div class="line_row3_row4"></div>
				<div class="line_row3_row4"></div>
			</div>
			<div class="row4">
				<span class="row4_span"></span>
				<div class="row4_div1">
					<div class="row4_div_img">
						<img src={php} alt={"img"} />
					</div>
					<p class="row4_p">PHP</p>
				</div>
				<div class="row4_div2">
					<div class="row4_div_img">
						<img src={javascript}  alt={"img"} />
					</div>
					<p class="row4_p">JavaScript</p>
				</div>
				<div class="row4_div3">
					<div class="row4_div_img">
						<img src={angular}  alt={"img"} />
					</div>
					<p class="row4_p">Angular</p>
				</div>
				<div class="row4_div4">
					<div class="row4_div_img">
						<img src={vue}  alt={"img"} />
					</div>
					<p class="row4_p">Vue.js</p>
				</div>
				<div class="row4_div5">
					<div class="row4_div_img">
						<img src={pyton}  alt={"img"} />
					</div>
					<p class="row4_p">Python</p>
				</div>
			</div>
		</div>
		</div>
	</section>
    );
};

export default Tecnologies;