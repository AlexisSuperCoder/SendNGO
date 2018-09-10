CREATE TABLE [dbo].[T_Adverts](
		[Id] [int] IDENTITY(1,1) NOT NULL,
		[UserId] INT NOT NULL,
		[VilleDepart] [varchar](150) NOT NULL,
		[VilleDestination] VARCHAR(150) NOT NULL,
		[Intitule] VARCHAR(200) NULL,
		[Poids] INT ,
		[Description] VARCHAR(MAX),
		[Hauteur] INT,
		[Largeur] INT,
		[Epaisseur] INT,
		[DateLimite] DATETIME,
		[Pourboire] DECIMAL
	)

ALTER TABLE dbo.T_Adverts
ADD CreationDate Datetime NOT NULL
CONSTRAINT cste_CreationDate DEFAULT Getdate()
WITH VALUES