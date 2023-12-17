import { TransactionType } from '@prisma/client';

interface Transaction {
	id?: string;
	designation: string;
	type?: TransactionType;
	amount: number;
	completed?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
	userId: string;
}

export const defaultTransactionSeeds = [
	{
		userId: '59e40a74-b915-461c-8cef-1006f9408340',
		transactionId: '067859ec-de6e-4dfc-ae61-42257c582820'
	},
	{
		userId: '59e40a74-b915-461c-8cef-1006f9408340',
		transactionId: '50e9502c-aeb5-4265-ae5b-84f1bfde7290'
	},
	{
		userId: '59e40a74-b915-461c-8cef-1006f9408340',
		transactionId: 'b1197280-bcd8-450f-b7a8-73f9f73bd329'
	},
	{
		userId: '59e40a74-b915-461c-8cef-1006f9408340',
		transactionId: 'b9ebcbeb-4b30-48f4-8480-b9ef1b3ee144'
	},
	{
		userId: '59e40a74-b915-461c-8cef-1006f9408340',
		transactionId: '80077220-3bc2-41cc-977a-c2409db58dec'
	},
	{
		userId: '59e40a74-b915-461c-8cef-1006f9408340',
		transactionId: 'b68a42b1-a3c0-49ef-8368-05dccbf86a52'
	}
];

export const transactionSeeds: Transaction[] = [
	{
		id: '067859ec-de6e-4dfc-ae61-42257c582820',
		designation: 'utilities',
		amount: 34028.19,
		completed: true,
		createdAt: new Date('2023-02-06 15:59:19'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '50e9502c-aeb5-4265-ae5b-84f1bfde7290',
		designation: 'healthcare',
		amount: 10957.76,
		completed: false,
		createdAt: new Date('2023-02-20 07:46:19'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '3da2e589-afcc-4c5f-92f1-6cedd337da6d',
		designation: 'utilities',
		amount: 27593.28,
		completed: false,
		createdAt: new Date('2023-09-02 16:51:58'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'b1197280-bcd8-450f-b7a8-73f9f73bd329',
		designation: 'restaurants',
		amount: 6164.2,
		completed: true,
		createdAt: new Date('2023-05-22 00:28:52'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '32bc7346-223d-4f88-8812-749150769078',
		designation: 'clothing',
		amount: 11716.38,
		completed: true,
		createdAt: new Date('2023-12-13 19:47:56'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'b68a42b1-a3c0-49ef-8368-05dccbf86a52',
		designation: 'home improvement',
		amount: 33547.98,
		completed: true,
		createdAt: new Date('2023-05-11 08:29:53'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '75a44dce-164d-4cd7-965a-cb5167a70d4a',
		designation: 'groceries',
		amount: 33133.75,
		completed: false,
		createdAt: new Date('2023-04-13 07:06:08'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'dfbfaecc-9473-47dd-9a59-683936eefe49',
		designation: 'groceries',
		amount: 31347.93,
		completed: false,
		createdAt: new Date('2023-06-19 00:21:41'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '7b039820-f3c5-4693-899c-a638f1995f1d',
		designation: 'clothing',
		amount: 24540.68,
		completed: true,
		createdAt: new Date('2023-04-09 11:03:33'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'ce753d59-3f6e-43dc-8d20-2e562bcaee82',
		designation: 'home improvement',
		amount: 39724.23,
		completed: true,
		createdAt: new Date('2023-05-10 18:48:15'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '2881b3ab-2106-446a-938d-2cd62188ef43',
		designation: 'travel',
		amount: 8363.08,
		completed: false,
		createdAt: new Date('2023-10-10 12:04:22'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'cda57f4c-9001-45c2-aa32-5a61837ee55c',
		designation: 'electronics',
		amount: 10737.32,
		completed: true,
		createdAt: new Date('2023-10-18 06:26:52'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'e4e6cc0d-80b1-4898-a4db-c01d1d5e5c8d',
		designation: 'utilities',
		amount: 8238.95,
		completed: true,
		createdAt: new Date('2023-03-04 19:06:40'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'ac51831a-3efb-45eb-979a-8e335e227551',
		designation: 'gifts',
		amount: 15204.31,
		completed: false,
		createdAt: new Date('2023-04-05 13:13:52'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '3d05c5c7-1dc3-4985-810f-3bf0af48699e',
		designation: 'home improvement',
		amount: 11211.42,
		completed: true,
		createdAt: new Date('2023-06-24 20:41:17'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'f24f73e7-8d84-4ceb-947f-40b1199627ed',
		designation: 'home improvement',
		amount: 14495.22,
		completed: true,
		createdAt: new Date('2023-01-13 05:31:29'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '0c6dc140-a8b2-49d0-abb1-d9e4a4332274',
		designation: 'gifts',
		amount: 1891.69,
		completed: false,
		createdAt: new Date('2023-09-06 05:06:39'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'be997f32-a55d-491c-8fd1-bc7d069d093b',
		designation: 'utilities',
		amount: 9942.15,
		completed: true,
		createdAt: new Date('2023-09-24 18:10:44'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '5858cfdc-d7de-42ce-90c5-26fdf5152717',
		designation: 'electronics',
		amount: 36653.37,
		completed: true,
		createdAt: new Date('2023-03-24 20:54:59'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '1a901183-64f6-4041-a65b-518039d032b0',
		designation: 'gifts',
		amount: 11409.73,
		completed: true,
		createdAt: new Date('2023-01-08 15:59:20'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'f08a183b-a8d5-4bdc-b3bc-11be6d4fcd2d',
		designation: 'restaurants',
		amount: 9813.13,
		completed: true,
		createdAt: new Date('2023-04-20 22:35:36'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'c464e38a-9ba2-410e-b144-916dc75a1f7d',
		designation: 'entertainment',
		amount: 14633.59,
		completed: false,
		createdAt: new Date('2023-08-31 05:47:40'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'b9ebcbeb-4b30-48f4-8480-b9ef1b3ee144',
		designation: 'travel',
		amount: 26377.86,
		completed: true,
		createdAt: new Date('2023-10-28 17:39:43'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'b402c036-dbff-4b7b-961e-e54425a80c27',
		designation: 'travel',
		amount: 8760.86,
		completed: false,
		createdAt: new Date('2023-10-08 16:25:44'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'f3b62302-1cab-426f-ae1c-374905dcae33',
		designation: 'electronics',
		amount: 28041.33,
		completed: true,
		createdAt: new Date('2023-01-27 16:38:31'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '8857ae59-4a16-4512-a867-fd55b44a098e',
		designation: 'clothing',
		amount: 31456.8,
		completed: false,
		createdAt: new Date('2023-01-19 11:43:42'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '204476a9-c8d1-4065-a27c-88b0f6b20651',
		designation: 'entertainment',
		amount: 19767.25,
		completed: false,
		createdAt: new Date('2023-02-02 16:47:52'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'bf441b6c-acc8-493d-a19b-19d447360f3e',
		designation: 'gifts',
		amount: 16247.05,
		completed: true,
		createdAt: new Date('2023-05-12 23:25:00'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'ac5be892-6068-48c0-bb3b-354e7dc6873a',
		designation: 'home improvement',
		amount: 24557.4,
		completed: false,
		createdAt: new Date('2023-07-24 05:47:00'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'cd433b1b-cce2-4d71-aa4d-0acdb9cdae78',
		designation: 'entertainment',
		amount: 20109.11,
		completed: true,
		createdAt: new Date('2023-07-27 15:15:37'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '3acaa9b5-6abe-4f6e-8681-d2df5a929a56',
		designation: 'home improvement',
		amount: 20557.33,
		completed: true,
		createdAt: new Date('2023-01-18 07:33:24'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '0e461735-2273-425f-a35a-5a5bdab7483a',
		designation: 'clothing',
		amount: 22953.46,
		completed: true,
		createdAt: new Date('2023-01-25 20:56:44'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '4470df20-e7cf-488a-ae42-e829ab8d6214',
		designation: 'utilities',
		amount: 10800.1,
		completed: false,
		createdAt: new Date('2023-09-03 22:13:26'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '9ed8dee3-b141-4582-b9a9-e778d7a6b37b',
		designation: 'utilities',
		amount: 25789.68,
		completed: false,
		createdAt: new Date('2023-03-16 08:52:40'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '9a951f98-b1d7-4ebc-b37b-5a8872c20dea',
		designation: 'healthcare',
		amount: 16851.27,
		completed: true,
		createdAt: new Date('2023-11-20 08:22:12'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '54b2802c-5498-46d1-b91a-e586c122dda2',
		designation: 'restaurants',
		amount: 5524.46,
		completed: false,
		createdAt: new Date('2023-11-09 10:32:36'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'ca088694-f470-427b-89bf-0375b59869be',
		designation: 'gifts',
		amount: 8162.28,
		completed: false,
		createdAt: new Date('2023-08-21 22:44:58'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'c013af3b-6dad-4464-83eb-0fe46293e8fc',
		designation: 'groceries',
		amount: 6877.48,
		completed: true,
		createdAt: new Date('2023-05-29 13:49:42'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '66603bae-1cea-4113-bf32-a7a93a05383e',
		designation: 'clothing',
		amount: 34247.88,
		completed: true,
		createdAt: new Date('2023-07-03 23:34:33'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '48e3de26-4038-445a-9b02-e290dd0ee589',
		designation: 'gifts',
		amount: 1078.12,
		completed: false,
		createdAt: new Date('2023-12-18 16:10:44'),
		type: 'EXPENSE',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '6d97bbe7-3bd4-4407-b619-470c0b9aed11',
		designation: 'Part-time job',
		amount: 15055.55,
		completed: true,
		createdAt: new Date('2023-02-23 00:42:51'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '48e78332-8f7f-4e72-86d8-fb8db01f3eb5',
		designation: 'Online sales',
		amount: 39215.0,
		completed: true,
		createdAt: new Date('2023-02-10 05:20:25'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '77e99877-602e-4e2a-9e4d-fcc06f8d31d1',
		designation: 'Royalties',
		amount: 68465.54,
		completed: false,
		createdAt: new Date('2023-07-25 15:06:27'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '0f1d20dc-48a6-4f15-bcf7-85b366aa8d2d',
		designation: 'Rent',
		amount: 19946.53,
		completed: false,
		createdAt: new Date('2023-06-19 17:12:54'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '199173cf-2077-4a01-b335-fe813fb822fb',
		designation: 'Royalties',
		amount: 42556.08,
		completed: false,
		createdAt: new Date('2023-09-19 11:56:46'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '3b69522b-b811-4f32-b786-838c3c4864d7',
		designation: 'Online sales',
		amount: 27812.28,
		completed: true,
		createdAt: new Date('2023-06-15 00:57:22'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'f53f3690-51d0-45d3-8f59-ef704622d26c',
		designation: 'Royalties',
		amount: 23693.28,
		completed: true,
		createdAt: new Date('2023-03-15 05:04:58'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '68521a27-06aa-42d9-bb16-056c140d99aa',
		designation: 'Royalties',
		amount: 48801.33,
		completed: false,
		createdAt: new Date('2023-01-15 14:47:50'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'be94cccf-d2f6-45ca-b19f-94753b544e54',
		designation: 'Rent',
		amount: 60515.57,
		completed: false,
		createdAt: new Date('2023-02-04 22:54:20'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '452cf026-45fc-443d-9914-27f3fc9c4549',
		designation: 'Dividends',
		amount: 48722.06,
		completed: true,
		createdAt: new Date('2023-02-01 09:38:20'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'bc5ce560-dadb-4b75-93e7-de38433b0651',
		designation: 'Dividends',
		amount: 10032.43,
		completed: false,
		createdAt: new Date('2023-05-11 18:02:16'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'b3c3e2d5-0ded-429b-95fd-78f70b26b932',
		designation: 'Gifts',
		amount: 53426.1,
		completed: false,
		createdAt: new Date('2023-08-25 12:11:01'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '09adc7e3-64e7-41b3-8434-534310b3a1a0',
		designation: 'Gifts',
		amount: 34597.5,
		completed: true,
		createdAt: new Date('2023-08-24 03:27:25'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '16a6d000-945b-434d-a1b9-b9733c55c34b',
		designation: 'Gifts',
		amount: 69743.83,
		completed: true,
		createdAt: new Date('2023-08-06 09:16:47'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'a260894e-2977-40cd-8f1f-9a2471b79d6b',
		designation: 'Salary',
		amount: 57459.99,
		completed: true,
		createdAt: new Date('2023-10-22 16:47:08'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '26544652-8f8f-4054-b041-2ddebd583d01',
		designation: 'Rent',
		amount: 54109.8,
		completed: false,
		createdAt: new Date('2023-08-24 10:21:26'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'def8dbfa-9e60-450e-8f12-bce0bf5678ad',
		designation: 'Investments',
		amount: 32834.35,
		completed: true,
		createdAt: new Date('2023-10-16 09:39:22'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'd320a362-3bf9-4004-ace1-36df0ff68124',
		designation: 'Dividends',
		amount: 54740.17,
		completed: false,
		createdAt: new Date('2023-01-01 16:53:20'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '1883cb5e-86c3-4ab2-8e4a-43cae3a55bef',
		designation: 'Consulting fees',
		amount: 64961.51,
		completed: false,
		createdAt: new Date('2023-01-15 06:45:35'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '80077220-3bc2-41cc-977a-c2409db58dec',
		designation: 'Consulting fees',
		amount: 57606.16,
		completed: false,
		createdAt: new Date('2023-03-15 08:23:44'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'deaa2ec9-9c2a-43c9-b969-2463e64f00b8',
		designation: 'Gifts',
		amount: 18057.13,
		completed: false,
		createdAt: new Date('2023-08-06 00:57:11'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '2dc98602-f8bd-4e1f-bf02-e9f005605f8c',
		designation: 'Gifts',
		amount: 16461.04,
		completed: true,
		createdAt: new Date('2023-08-14 16:51:06'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '29505e0e-17e1-4634-af59-7602386f9df7',
		designation: 'Dividends',
		amount: 34736.65,
		completed: false,
		createdAt: new Date('2023-08-25 18:19:55'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: '043ae0d5-0ade-4d9e-9f67-e74809f5344a',
		designation: 'Freelancing',
		amount: 30599.34,
		completed: true,
		createdAt: new Date('2023-03-15 17:31:03'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	},
	{
		id: 'c5b0afb2-a779-4aeb-be91-0baaa4ccf841',
		designation: 'Investments',
		amount: 56452.97,
		completed: true,
		createdAt: new Date('2023-01-22 07:01:23'),
		type: 'INCOME',
		userId: '59e40a74-b915-461c-8cef-1006f9408340'
	}
];
