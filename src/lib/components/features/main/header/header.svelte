<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Avatar from '$lib/components/ui/avatar';

	const user = {
		firstName: 'John',
		lastName: 'Doe',
		avatar: {
			src: 'https://avatars.githubusercontent.com/u/4726921?s=60&v=4',
			alt: 'Profile picture of John Doe'
		}
	};

	const initials = `${user.firstName[0]}${user.lastName[0]}`;
</script>

<header class="sticky inset-x-0 top-0 inline-flex flex-col">
	<div class="grid grid-cols-12 items-center justify-start p-2">
		<nav class="col-span-5 flex">
			<ul role="navigation" class="flex items-center gap-4">
				<li role="menuitem">
					<Button size="sm" variant="ghost">
						<span>My Classroom</span>
					</Button>
				</li>
				<li>
					<Button size="sm" variant="ghost">
						<span>Browse</span>
					</Button>
				</li>
				<li>
					<Button size="sm" variant="ghost">
						<span>Community</span>
					</Button>
				</li>
			</ul>
		</nav>

		<div class="col-span-2 flex justify-center">
			<Button size="sm" variant="ghost" href="/" aria-label="CodeWise" class="text-lg font-bold">
				<span class="text-white">Code</span>
				<span class="text-primary">Wise</span>
			</Button>
		</div>

		<div class="col-span-5 flex justify-end">
			<Avatar.Root>
				<Avatar.Image {...user.avatar} />
				<Avatar.Fallback>{initials}</Avatar.Fallback>
			</Avatar.Root>
		</div>
	</div>
</header>

<Separator orientation="horizontal" />
