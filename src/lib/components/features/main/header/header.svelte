<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Avatar from '$lib/components/ui/avatar';
	import Bell from 'lucide-svelte/icons/bell';
	import Search from 'lucide-svelte/icons/search';

	type TPath = {
		name: string;
		href: string;
	};

	const paths = [
		{
			name: 'My Classroom',
			href: '/my-classroom'
		},
		{
			name: 'Browse',
			href: '/browse'
		},
		{
			name: 'Community',
			href: '/community'
		}
	] as const satisfies Array<TPath>;

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
					{#each paths as path}
						<Button variant="ghost" aria-label={path.name} href={path.href}>
							<span>{path.name}</span>
						</Button>
					{/each}
				</li>
			</ul>
		</nav>

		<div class="col-span-2 flex justify-center">
			<Button variant="ghost" href="/" aria-label="CodeWise" class="text-lg font-bold">
				<span class="text-white">Code</span>
				<span class="text-white">.</span>
				<span class="text-primary">Wise</span>
			</Button>
		</div>

		<div class="col-span-5 flex justify-end">
			<div class="flex items-center gap-2">
				<Button variant="ghost" aria-label="Search">
					<Search class="mr-2 h-4 w-4" />
					<span>Search</span>
				</Button>

				<Button size="icon" variant="ghost" aria-label="Notifications">
					<Bell class="h-4 w-4" />
					<span class="sr-only">Notifications</span>
				</Button>

				<Avatar.Root>
					<Avatar.Image {...user.avatar} />
					<Avatar.Fallback>{initials}</Avatar.Fallback>
				</Avatar.Root>
			</div>
		</div>
	</div>
</header>

<Separator orientation="horizontal" />
