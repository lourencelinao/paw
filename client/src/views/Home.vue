<template>
	<div class="font-graphik">
		<div class="text-bluegray-700 font-normal text-4xl tracking-wide text-center mt-10">PAW</div>
		<div class="mx-auto mt-10 sm:w-2/3 md:w-1/2 lg:w-1/3">
			<div class="bg-white lg:py-8 lg:px-16 md:p-8 sm:p-8 p-8 rounded-lg shadow">
				<div class="text-3xl">Login</div>

        <!-- form start -->
				<form action="">
          <div class="mt-5">
            <div class="font-normal text-lg">E-Mail Address</div>
            <input
              type="email"
              class="mt-2 px-5 py-3 w-full border-2 border-gray rounded-md focus:ring-2 focus:ring-bluegray-600 focus:outline-none"
               required
            />
				  </div>

          <div class="mt-5">
            <div class="font-normal text-lg">Password</div>
            <input
              type="password"
              class="mt-2 px-5 py-3 w-full border-2 border-gray rounded-md focus:ring-2 focus:ring-bluegray-600 focus:outline-none"
               required
            />
          </div>

          <div class="mt-5 flex justify-between items-baseline">
            <button class="btn-primary py-2 px-4">LOGIN</button>
            <a href="#" class="text-blue-500 hover:text-blue-300 text-lg">Forgot Your Password?</a>
          </div>
        </form>
      <!-- form end -->
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>
