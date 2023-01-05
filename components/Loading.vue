<template>
	<div class="back-screen">
		<div class ="centered">
			<div class = "blob-1"></div>
			<div class = "blob-2"></div>
			<div class = "blob-3"></div>
			<div class = "blob-4"></div>
		</div>
	</div>

</template>

<script>
  export default {
	props: {
		loading: {
			type: Boolean,
			default: true
		}
	}

  }
</script>

<style scoped>
.back-screen{
	width:100vw;
	height:100vh;
	background:rgba(99, 99, 99, 0.715) !important;
	margin:0 !important;
}
.centered{
	width:400px;
	height:400px;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	/* background:#E94B4C; */
	filter: blur(10px) contrast(20);
}
.blob-1,.blob-2{
	width:70px;
	height:70px;
	position:absolute;
	background:#E94B4C;
	border-radius:50%;
	top:50%;left:50%;
	transform:translate(-50%,-50%);
}
.blob-3,.blob-4{
	width:70px;
	height:70px;
	position:absolute;
	background:#C6D42E;
	border-radius:50%;
	top:50%;left:40%;
	transform: translate;
}
.blob-1{
	left:20%;
	animation:osc-l 2.5s ease infinite;
	animation-direction: alternate-reverse;
}
.blob-2{
	left:80%;
	animation:osc-r 2.5s ease infinite;
	background:#2AB5B2;
	animation-direction: alternate-reverse;
}
.blob-3{
	top:20%;
	animation:osc-t 2.5s ease infinite;
	animation-direction: alternate;
}
.blob-4{
	top:80%;
	animation:osc-b 2.5s ease infinite;
	background:#DD88B8;
	animation-direction: alternate;
}
@keyframes osc-l{
	0%{left:20%;}
	50%{left:50%;}
	100%{left:20%;}
}
@keyframes osc-r{
	0%{left:80%;}
	50%{left:50%;}
	100%{left:80%;}
}
@keyframes osc-t{
	0%{top:20%;}
	50%{top:50%;}
	100%{top:20%;}
}
@keyframes osc-b{
	0%{top:80%;}
	50%{top:50%;}
	100%{top:80%;}
}
</style>